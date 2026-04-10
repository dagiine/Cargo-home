export default function home() {
  return `
    <section class="hero">
      <div class="hero-text">
        <h1>Хятад Улсаас Монгол Улс руу <br><span>Хялбар тээвэрлэлт</span></h1>
        <p>Шуурхай, найдвартай, ил тод карго шийдэл. Таны бизнес болон Монголын зах зээлийг холбох гүүр.</p>

        <div class="track">
          <label>Хурдан хяналт</label>
          <div class="track-input">
            <input type="text" placeholder="Хяналтын код оруулах (жишээ: MN-12345)" />
            <button>
              <span class="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>

        <a href="#/create-order" class="btn big">Шинэ захиалга үүсгэх</a>
      </div>

      <div>
        <img src="./pics/truck.png" alt="Truck" class="car-img" />
      </div>
    </section>

    <!-- Stats -->
    <section class="stats">
      <article class="stat">
        <strong>5000+</strong>
        <span>Илгээмж</span>
      </article>
      <article class="stat">
        <strong>1200+</strong>
        <span>Харилцагч</span>
      </article>
      <article class="stat">
        <strong>3–7</strong>
        <span>Хоногт хүргэнэ</span>
      </article>
    </section>

    <!-- Calculator -->
    <section class="calc">
      <h2>Тээврийн зардлын тооцоолуур</h2>
      <p>Хятадаас Монголд ирэх ачаа тээврийн зардлаа шууд тооцоолж үзээрэй.</p>

      <form>
        <div class="fields">
          <div class="field">
            <label for="weight">Жин (kg)</label>
            <input id="weight" type="number" placeholder="0.00" />
          </div>
          <div class="field">
            <label for="length">Урт (cm)</label>
            <input id="length" type="number" placeholder="0" />
          </div>
          <div class="field">
            <label for="width">Өргөн (cm)</label>
            <input id="width" type="number" placeholder="0" />
          </div>
          <div class="field">
            <label for="height">Өндөр (cm)</label>
            <input id="height" type="number" placeholder="0" />
          </div>
        </div>
        <button type="submit" class="btn big">Тооцоолох</button>
      </form>
    </section>

    <!-- Services -->
    <section class="services">
      <h2>Дэвшилтэт логистикийн шийдлүүд</h2>
      <p>Бид тээврийн бүхий л үе шатыг нарийн төлөвлөж, таны бараа саадгүй ирэх нөхцөлийг бүрдүүлнэ.</p>

      <div class="cards">
        <article class="card">
          <span class="material-symbols-outlined">bolt</span>
          <h3>Шуурхай тээвэрлэлт</h3>
          <p>Сайтар тооцоолсон маршрут болон түргэн гаалийн бүрдүүлэлтээр таны ачааг хил дамнан богино хугацаанд хүргэнэ.</p>
        </article>
        <article class="card">
          <span class="material-symbols-outlined">verified_user</span>
          <h3>Найдвартай</h3>
          <p>Даатгалтай тээвэрлэлт болон мэргэжлийн багийн ажиллагаа нь ачааг аюулгүй, найдвартай хүргэх баталгааг олгоно.</p>
        </article>
        <article class="card">
          <span class="material-symbols-outlined">monitoring</span>
          <h3>Шууд хяналтын систем</h3>
          <p>Орчин үеийн GPS хяналт болон тогтмол шинэчлэгдэх мэдээллээр та ачааныхаа хаана явж байгааг хэзээ ч хянах боломжтой.</p>
        </article>
      </div>
    </section>
  `;
}