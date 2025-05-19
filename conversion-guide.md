# TypeScript'ten JavaScript'e Dönüşüm Kılavuzu

Bu kılavuz, mevcut TypeScript projesini JavaScript'e dönüştürme adımlarını gösterir.

## 1. Dosya Uzantılarını Değiştirme

- TypeScript dosyaları: `.ts`, `.tsx`
- JavaScript dosyaları: `.js`, `.jsx`

Tüm `.ts` ve `.tsx` dosyalarını, aşağıdaki gibi yeniden adlandırın:
- `.ts` dosyaları → `.js` olacak
- `.tsx` dosyaları → `.jsx` olacak

## 2. Tip Tanımlamalarını Kaldırma

### TypeScript Kod Örneği:
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User | null {
  // işlemler
  return user;
}

const userAge: number = 25;
```

### JavaScript Dönüşümü:
```javascript
function getUser(id) {
  // işlemler
  return user;
}

const userAge = 25;
```

## 3. Yapılacak Dönüşüm Örnekleri

### TypeScript İçe Aktarma/Dışa Aktarma:
```typescript
import { User, Post } from "./types";
export interface Comment { /* ... */ }
```

### JavaScript Dönüşümü:
```javascript
import { User, Post } from "./types";
// Interface dışa aktarmaları JSDoc ile yorum olarak eklenebilir
/**
 * @typedef {Object} Comment
 */
```

### TypeScript Fonksiyon İmzaları:
```typescript
function calculateTotal(prices: number[], discount?: number): number {
  // ...
}
```

### JavaScript Dönüşümü:
```javascript
/**
 * @param {Array<number>} prices
 * @param {number} [discount]
 * @returns {number}
 */
function calculateTotal(prices, discount) {
  // ...
}
```

## 4. Proje Yapılandırma Dosyalarını Güncelleme

### package.json Güncellemeleri
- TypeScript bağımlılıklarını kaldırın veya dev bağımlılıklarına taşıyın
- Build ve dev komutlarını JavaScript için güncelleyin

### Babel Yapılandırması (Eğer Kullanılıyorsa)
- React JSX desteği için Babel'i yapılandırın

### ESLint Yapılandırması
- TypeScript ESLint kurallarını kaldırın
- JavaScript için uygun ESLint kurallarını ekleyin

## 5. Dönüşüm Sürecinde Dikkat Edilecek Hususlar

1. Tip dönüşümlerini kaldırın: `as string` gibi ifadeler
2. Jenerik tipleri kaldırın: `Array<string>` -> sadece `Array`
3. Arayüzleri ve tipleri JSDoc yorumlarına dönüştürün veya kaldırın
4. Tip parametrelerini kaldırın: `<T>` gibi
5. İsteğe bağlı zincirleme operatörünü geleneksel kontrollere dönüştürün: `?.` -> `&&`
6. Null birleştirme operatörünü klasik OR ifadesine dönüştürün: `??` -> `||`

## 6. Sık Karşılaşılan TypeScript Özellikleri ve JavaScript Alternatifleri

| TypeScript Özelliği | JavaScript Alternatifi |
|---------------------|------------------------|
| interface, type | JSDoc yorum bloğu (@typedef) veya yok sayma |
| Enum | Object freeze veya basit obje |
| keyof typeof | Object.keys |
| Tip koruyucuları | typeof, instanceof kontrolleri |
| Modül tanım dosyaları (.d.ts) | Kaldırın |
| Pick, Omit, Partial vb. | Normal objeler ve spread operatörü |

## 7. Test ve Hata Giderme

Dönüşümü tamamladıktan sonra:
1. Tüm bağımlılıkları yeniden yükleyin: `npm install`
2. Uygulamayı başlatın: `npm start` veya `npm run dev`
3. Konsol hataları olup olmadığını kontrol edin
4. Tüm işlevleri test edin ve davranışın beklenen gibi olduğundan emin olun