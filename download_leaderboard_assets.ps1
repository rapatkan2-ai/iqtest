$baseUrlMain = "https://cdn.jsdelivr.net/gh/rapatkan2-ai/iqtest@main/"
$dest = "d:\MindTest\deployment\assets\"

$files = @(
    @{Url = $baseUrlMain + "FaviconNew.webp"; Out = "FaviconNew.webp" },
    @{Url = $baseUrlMain + "avatar-svgrepo-com%20(1).svg"; Out = "avatar-1.svg" },
    @{Url = $baseUrlMain + "avatar-svgrepo-com%20(3).svg"; Out = "avatar-3.svg" },
    @{Url = $baseUrlMain + "avatar-svgrepo-com%20(4).svg"; Out = "avatar-4.svg" },
    @{Url = $baseUrlMain + "avatar-svgrepo-com%20(5).svg"; Out = "avatar-5.svg" },
    @{Url = $baseUrlMain + "avatar-svgrepo-com%20(6).svg"; Out = "avatar-6.svg" },
    @{Url = $baseUrlMain + "avatar-svgrepo-com%20(7).svg"; Out = "avatar-7.svg" },
    @{Url = $baseUrlMain + "avatar-svgrepo-com%20(8).svg"; Out = "avatar-8.svg" },
    @{Url = $baseUrlMain + "avatar-portrait-svgrepo-com.svg"; Out = "avatar-portrait.svg" },
    @{Url = "https://www.svgrepo.com/show/475656/google-color.svg"; Out = "google-color.svg" },
    @{Url = "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"; Out = "Microsoft_logo.svg" }
)

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
