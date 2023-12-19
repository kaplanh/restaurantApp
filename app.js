import data from "./data.js"
const productDiv=document.querySelectorAll(".product")
const urunKoduGirisi=document.getElementById("urunKodu")
const masaKoduGirisi=document.getElementById("masaKodu")
const sipButton=document.getElementById("siparisButton")
const masaNo=document.querySelectorAll(".masa")
const hesabiKapatLink=document.querySelectorAll(".hesapKapat a")
const uyariUrunKodu = document.querySelector(".uyari-urunKodu");
const uyariMasaKodu = document.querySelector(".uyari-masaKodu");
const uyariSiparisOlustur = document.querySelector(".uyari-siparisOlustur");


let urunKodu=0;
let masaKodu=0;

productDiv.forEach((urun)=>{

    urun.addEventListener("click",function(e){
        e.preventDefault()
        const pElement=urun.querySelector("p")

        if (pElement){
            const pElementIcerigi=pElement.textContent
            console.log(pElementIcerigi)
            urunKoduGirisi.value=pElementIcerigi
            urunKodu=urunKoduGirisi.value
        }
    })
})

masaNo.forEach((masa)=>{
    masa.addEventListener("click",function(e){
        e.preventDefault()
        const pMasa=masa.querySelector("p")
        masaKodu=pMasa.textContent
        masaKoduGirisi.value=masaKodu
    })
})

sipButton.addEventListener("click",function(e){
    e.preventDefault()

    if (masaKoduGirisi.value==="" || urunKoduGirisi===""){
       
        masaKoduGirisi.value==="" && urunKoduGirisi.value==="" ? 
        uyariSiparisOlustur.innerHTML="Masa ve Urun Kodu Girin" 
        : urunKoduGirisi.value==="" 
        ? uyariUrunKodu.innerHTML="Urun Kodu Girin" :
         uyariMasaKodu.innerHTML="Masa Kodu Girin" 
    
         setTimeout(()=>{
            uyariUrunKodu.innerHTML="";
            uyariMasaKodu.innerHTML="";
            uyariSiparisOlustur.innerHTML=""
         },3000)
    
        }

    const masaNoList=document.querySelectorAll(".masaNo p")   

    masaNoList.forEach((masaBilgi)=>{
        const masaNumarasi=masaBilgi.textContent.trim()
        const masaSiparisAlani=masaBilgi.parentElement.nextElementSibling

        if (masaNumarasi===masaKodu){
            data.forEach((x)=>{
                if (x.id===urunKodu){                    
                //     //createElement,appendChild
                //     const div=document.createElement("div")
                //     div.classList.add(".SiparisEdilmisUrun")
                //     //template literal - backtick
                //     div.innerHTML=` 
                //     <img src=${x.icon} width="40px" alt="urun"/>
                //     <p>${x.title}</p>
                //     <p>${x.price}TL</p>
                //     <a href="" id="del"><i class="fa-solid fa-trash"></i></a> 
                //     `;
                //     masaSip.appendChild(div)                
                // }
                const siparisAlani=`
                    <div class="SiparisEdilmisUrun">
                    <img src=${x.icon} width="40px" alt="urun"/>
                    <p>${x.title}</p>
                    <p>${x.price}TL</p>
                    <a href="" id="del"><i class="fa-solid fa-trash"></i></a> 
                    </div>
                    `;
                  masaSiparisAlani.innerHTML +=siparisAlani
                
            }})
            masaKoduGirisi.value=""
            urunKoduGirisi.value=""
        }

        masaSiparisAlani.addEventListener("click",function(e){
            if (e.target.classList.contains("fa-trash")){
                const silinecekEleman=e.target.closest(".SiparisEdilmisUrun")
                if (silinecekEleman){
                    silinecekEleman.remove()
                }
            }
        })
    })

})


hesabiKapatLink.forEach((link)=>{
    link.addEventListener("click",function(e){
        e.preventDefault()

        const parentDiv=link.closest(".masa")

        if (parentDiv){

            const masaSipDiv=parentDiv.querySelector(".masaSip");
            masaSipDiv.innerHTML=""
        }
    })
})
