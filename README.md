# 馬克文創官方網站

祈福馬克杯／保溫瓶形象官網（Next.js），可直接部署至 Vercel。

## 本機開發

```bash
cd website
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)

## 建置

```bash
npm run build
npm start
```

## 部署到 Vercel（商業使用）

1. 將 `website` 資料夾推上 GitHub（或整個專案，並在 Vercel 設定 Root Directory 為 `website`）
2. 前往 [vercel.com](https://vercel.com) → Import Project
3. Framework Preset 選 **Next.js**，Root Directory 設為 `website`
4. Deploy

自訂網域可在 Vercel → Project → Settings → Domains 綁定（例如 blessingmug.com）。

## 內容來源

品牌文案、商品售價、公司資訊依《馬克文創有限公司》PDF／既有官網資料整理：

- 商品優惠價 NT$1,800（原價 NT$2,200）
- 地址：台北市中山區松江路101號4樓之2
- 客服：service@blessingmug.com
- 統編：93640608

## 後續可擴充

- 接上真正結帳（Shopify / ECPay / NewebPay）
- 上傳商品實拍照替換目前示意視覺
- 會員與購物車
