$baseUrlMain = "https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/"
$dest = "d:\MindTest\deployment\assets\"

$files = @(
    @{Url = $baseUrlMain + "Tes%20IQ%20Picture.webp"; Out = "Tes_IQ_Picture.webp" },
    @{Url = $baseUrlMain + "4.webp"; Out = "4.webp" },
    @{Url = $baseUrlMain + "coin%20(2).webp"; Out = "coin_2.webp" },
    @{Url = $baseUrlMain + "6.webp"; Out = "6.webp" },
    @{Url = $baseUrlMain + "7%20(1).webp"; Out = "7_1.webp" },
    @{Url = $baseUrlMain + "8%20(1).webp"; Out = "8_1.webp" },
    @{Url = $baseUrlMain + "9%20(2).webp"; Out = "9_2.webp" },
    @{Url = $baseUrlMain + "10.webp"; Out = "10.webp" },
    @{Url = $baseUrlMain + "11.webp"; Out = "11.webp" },
    @{Url = $baseUrlMain + "12%20(1).webp"; Out = "12_1.webp" },
    @{Url = $baseUrlMain + "14%20(1).webp"; Out = "14_1.webp" },
    @{Url = $baseUrlMain + "15%20(1).webp"; Out = "15_1.webp" },
    @{Url = "https://www.svgrepo.com/show/475656/google-color.svg"; Out = "google-color.svg" },
    @{Url = "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"; Out = "Microsoft_logo.svg" },
    @{Url = $baseUrlMain + "FaviconNew.webp"; Out = "FaviconNew.webp" }
)

if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest | Out-Null
}

foreach ($file in $files) {
    $outPath = Join-Path $dest $file.Out
    if (-not (Test-Path $outPath)) {
        Write-Host "Downloading $($file.Out)..."
        try {
            Invoke-WebRequest -Uri $file.Url -OutFile $outPath
        }
        catch {
            Write-Host "Error downloading $($file.Url): $_"
        }
    }
    else {
        Write-Host "File $($file.Out) already exists. Skipping."
    }
}
