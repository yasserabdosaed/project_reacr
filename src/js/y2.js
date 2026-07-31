import { useContext } from "react";
import { Vv } from "../context/contt";
import { useParams } from "react-router-dom";

export function Ya2() {
  let { x } = useParams(); // النص القادم من الرابط (مثلاً "1" أو "2")
  let dat1 = useContext(Vv); // المصفوفة القادمة من الـ Context

  // البحث مباشرة في المصفوفة الأصليّة مع تحويل x إلى رقم (Number) للمطابقة مع id
  let selectedItem = dat1.find((e) => e.id === Number(x));

  // إذا لم يجد العنصر لا يعرض شيئاً أو يمكنك عرض رسالة
  if (!selectedItem) {
    return <h2>العنصر غير موجود</h2>;
  }

  return (
    <div>
      <h1>{selectedItem.nam}</h1>
      <h1>{selectedItem.bod}</h1>
    </div>
  );
}