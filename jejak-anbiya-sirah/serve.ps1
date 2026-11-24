# Pelayan HTTP Tempatan Ringan (Tiada Node.js atau Python diperlukan)
# Jalankan: powershell -ExecutionPolicy Bypass -File .\serve.ps1
param(
  [int]$Port = 4173
)

$RootDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$Listener = New-Object System.Net.HttpListener
$Prefix = "http://localhost:$Port/"
$Listener.Prefixes.Add($Prefix)
$Listener.Start()

$MimeTypes = @{
  '.html'        = 'text/html; charset=utf-8'
  '.css'         = 'text/css; charset=utf-8'
  '.js'          = 'application/javascript; charset=utf-8'
  '.json'        = 'application/json; charset=utf-8'
  '.webmanifest' = 'application/manifest+json; charset=utf-8'
  '.svg'         = 'image/svg+xml'
  '.png'         = 'image/png'
  '.ico'         = 'image/x-icon'
}

Write-Host "Jejak Anbiya & Sirah sedia di: $Prefix" -ForegroundColor Green
Write-Host "Tekan Ctrl+C untuk berhenti." -ForegroundColor Yellow

try {
  while ($Listener.IsListening) {
    $Context = $Listener.GetContext()
    $ReqPath = $Context.Request.Url.LocalPath
    if ($ReqPath -eq '/' -or [string]::IsNullOrWhiteSpace($ReqPath)) {
      $ReqPath = '/index.html'
    }

    $RelativePath = $ReqPath.TrimStart('/').Replace('/', '\')
    $FullPath = [System.IO.Path]::GetFullPath((Join-Path $RootDir $RelativePath))

    if (-not $FullPath.StartsWith($RootDir, [System.StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path $FullPath -PathType Leaf)) {
      $Context.Response.StatusCode = 404
      $Bytes = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found')
      $Context.Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
      $Context.Response.Close()
      continue
    }

    $Ext = [System.IO.Path]::GetExtension($FullPath).ToLowerInvariant()
    $Context.Response.ContentType = if ($MimeTypes.ContainsKey($Ext)) { $MimeTypes[$Ext] } else { 'application/octet-stream' }
    $Bytes = [System.IO.File]::ReadAllBytes($FullPath)
    $Context.Response.ContentLength64 = $Bytes.Length
    $Context.Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
    $Context.Response.Close()
  }
} finally {
  $Listener.Stop()
  $Listener.Close()
}
