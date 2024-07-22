$today = Get-Date -Format "yyyyMMdd-HH-mm"
$postfix = "stage"
docker build --file dockerfile -t gitlab.alt-craft.com:5050/root/pampadu/common/landing-nuxt:${today}-${postfix} .
docker push gitlab.alt-craft.com:5050/root/pampadu/common/landing-nuxt:${today}-${postfix}
echo "sudo docker stop pampadu-stage && sudo docker rm pampadu-stage && sudo docker run --restart=always -v ~/site-static:/app/static -d --name pampadu-stage -p 5001:3000 gitlab.alt-craft.com:5050/root/pampadu/common/landing-nuxt:${today}-${postfix}"

$today = Get-Date -Format "yyyyMMdd-HH-mm"
docker build --file dockerfile -t gitlab.alt-craft.com:5050/root/pampadu/common/landing-nuxt:${today} .
docker push gitlab.alt-craft.com:5050/root/pampadu/common/landing-nuxt:${today}
echo "sudo docker stop pampadu && sudo docker rm pampadu && sudo docker run --restart=always -v ~/static:/app/static -d --name pampadu -p 5000:3000 gitlab.alt-craft.com:5050/root/pampadu/common/landing-nuxt:${today}"
