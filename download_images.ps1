$headers = @{'User-Agent'='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
$outputDir = 'C:\Users\Ori\Desktop\ttd\kids-game\public\images'

$searches = @(
    @{query='cave+cartoon+clipart+simple+png'; file='word-ghar.png'},
    @{query='strawberry+cartoon+clipart+simple+png'; file='word-farawla.png'},
    @{query='dress+cartoon+clipart+simple+png'; file='word-fustan.png'},
    @{query='mouth+lips+cartoon+clipart+simple+png'; file='word-fam.png'},
    @{query='lantern+cartoon+clipart+simple+png'; file='word-fanus.png'},
    @{query='coffee+cup+cartoon+clipart+simple+png'; file='word-finjan.png'}
)

foreach ($search in $searches) {
    $query = $search.query
    $file = $search.file
    $outPath = Join-Path $outputDir $file

    Write-Host "Searching for: $query"

    $url = "https://www.google.com/search?q=$query&tbm=isch&hl=en"
    $response = Invoke-WebRequest -Uri $url -Headers $headers

    # Extract encrypted-tbn URLs
    $pattern = 'https://encrypted-tbn0\.gstatic\.com/images\?q=tbn:[A-Za-z0-9_\-]+&amp;s'
    $matches = [regex]::Matches($response.Content, $pattern)

    if ($matches.Count -gt 0) {
        $imgUrl = $matches[0].Value -replace '&amp;', '&'
        Write-Host "Found thumbnail: $imgUrl"
        Write-Host "Downloading to: $outPath"
        Invoke-WebRequest -Uri $imgUrl -OutFile $outPath
        $size = (Get-Item $outPath).Length
        Write-Host "Downloaded: $file ($size bytes)"
    } else {
        Write-Host "ERROR: No images found for $query"
    }
    Write-Host "---"
}

Write-Host "`nAll downloads complete. Checking files:"
Get-ChildItem $outputDir -Filter "word-*.png" | Select-Object Name, Length | Format-Table
