function showPage(pageId) {
            // ดึง Element ของแต่ละส่วนมาเก็บไว้ในตัวแปร
            const homePage = document.getElementById('page-home');
            const resume1 = document.getElementById('page-resume1');
            const resume2 = document.getElementById('page-resume2');
            const resumeNav = document.getElementById('resume-nav');

            // ซ่อนทุกหน้าไปก่อน (display = 'none')
            homePage.style.display = 'none';
            resume1.style.display = 'none';
            resume2.style.display = 'none';

            // ตรวจสอบว่าผู้ใช้กดเลือกหน้าไหน แล้วค่อยแสดงหน้านั้น (display = 'block')
            if (pageId === 'home') {
                homePage.style.display = 'block';
                resumeNav.style.display = 'none'; // หน้า Home ไม่ต้องมีเมนู 1,2,3
            } 
            else if (pageId === 'resume1') {
                resume1.style.display = 'block';
                resumeNav.style.display = 'flex'; // แสดงเมนู 1,2,3
            } 
            else if (pageId === 'resume2') {
                resume2.style.display = 'block';
                resumeNav.style.display = 'flex'; // แสดงเมนู 1,2,3
            }

            // เลื่อนหน้าจอขึ้นไปบนสุดทุกครั้งที่เปลี่ยนหน้า
            window.scrollTo(0, 0);
        }