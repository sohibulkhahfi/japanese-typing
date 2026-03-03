const newsData = [
  {
    title: "東京や高知市で久しぶりに長い時間雨が降った <br> Hujan turun dalam waktu lama untuk pertama kalinya setelah sekian lama di Tokyo dan Kota Kochi.",
    content: `
<div class="sentence-block" data-plain="東京や高知市で久しぶりに長い時間雨が降った">
  <div class="japanese">
    <ruby>東京<rt>とうきょう</rt></ruby>や
    <ruby>高知市<rt>こうちし</rt></ruby>で
    <ruby>久<rt>ひさ</rt></ruby>しぶりに
    <ruby>長<rt>なが</rt></ruby>い
    <ruby>時間<rt>じかん</rt></ruby>
    <ruby>雨<rt>あめ</rt></ruby>が
    <ruby>降<rt>ふ</rt></ruby>った
  </div>
  <span class="translation">Hujan turun dalam waktu lama untuk pertama kalinya setelah sekian lama di Tokyo dan Kota Kochi.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="25日は、東北地方から九州地方までの多くの場所で雨が降っています。">
  <div class="japanese">
    25<ruby>日<rt>にち</rt></ruby>は、
    <ruby>東北地方<rt>とうほくちほう</rt></ruby>から
    <ruby>九州地方<rt>きゅうしゅうちほう</rt></ruby>までの
    <ruby>多<rt>おお</rt></ruby>くの
    <ruby>場所<rt>ばしょ</rt></ruby>で
    <ruby>雨<rt>あめ</rt></ruby>が
    <ruby>降<rt>ふ</rt></ruby>っています。
  </div>
  <span class="translation">Pada tanggal 25, hujan turun di banyak tempat dari wilayah Tohoku hingga wilayah Kyushu.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="午後6時までの24時間に、高知市で120ミリの雨が降りました。">
  <div class="japanese">
    <ruby>午後<rt>ごご</rt></ruby>6<ruby>時<rt>じ</rt></ruby>までの24<ruby>時間<rt>じかん</rt></ruby>に、
    <ruby>高知市<rt>こうちし</rt></ruby>で120ミリの
    <ruby>雨<rt>あめ</rt></ruby>が
    <ruby>降<rt>ふ</rt></ruby>りました。
  </div>
  <span class="translation">Dalam 24 jam hingga pukul 6 sore, curah hujan mencapai 120 mm di Kota Kochi.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="東京の中心では35ミリ降りました。">
  <div class="japanese">
    <ruby>東京<rt>とうきょう</rt></ruby>の
    <ruby>中心<rt>ちゅうしん</rt></ruby>では35ミリ
    <ruby>降<rt>ふ</rt></ruby>りました。
  </div>
  <span class="translation">Di pusat Tokyo turun hujan sebanyak 35 mm.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="東京の中心や高知市では、3か月半ぐらい10ミリより多い雨は降っていませんでした。">
  <div class="japanese">
    <ruby>東京<rt>とうきょう</rt></ruby>の
    <ruby>中心<rt>ちゅうしん</rt></ruby>や
    <ruby>高知市<rt>こうちし</rt></ruby>では、3か<ruby>月<rt>げつ</rt></ruby><ruby>半<rt>はん</rt></ruby>ぐらい10ミリより
    <ruby>多<rt>おお</rt></ruby>い
    <ruby>雨<rt>あめ</rt></ruby>は
    <ruby>降<rt>ふ</rt></ruby>っていませんでした。
  </div>
  <span class="translation">Di pusat Tokyo dan Kota Kochi, tidak ada hujan lebih dari 10 mm selama sekitar 3,5 bulan.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="久しぶりの雨です。">
  <div class="japanese">
    <ruby>久<rt>ひさ</rt></ruby>しぶりの
    <ruby>雨<rt>あめ</rt></ruby>です。
  </div>
  <span class="translation">Ini adalah hujan pertama setelah sekian lama.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="気象庁によると、この雨は26日も続いて、関東地方では強く降る所もありそうです。">
  <div class="japanese">
    <ruby>気象庁<rt>きしょうちょう</rt></ruby>によると、この
    <ruby>雨<rt>あめ</rt></ruby>は26<ruby>日<rt>にち</rt></ruby>も
    <ruby>続<rt>つづ</rt></ruby>いて、
    <ruby>関東地方<rt>かんとうちほう</rt></ruby>では
    <ruby>強<rt>つよ</rt></ruby>く
    <ruby>降<rt>ふ</rt></ruby>る
    <ruby>所<rt>ところ</rt></ruby>もありそうです。
  </div>
  <span class="translation">Menurut Badan Meteorologi, hujan ini akan berlanjut hingga tanggal 26, dan sepertinya ada tempat-tempat di wilayah Kanto yang akan diguyur hujan lebat.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="気をつけてください。">
  <div class="japanese">
    <ruby>気<rt>き</rt></ruby>をつけてください。
  </div>
  <span class="translation">Harap berhati-hati.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>
    `
  },
  {
    title: "日本の桜、今年は早く咲くでしょう <br> Bunga Sakura di Jepang, tahun ini akan mekar lebih awal",
    content: `
<!-- 1 -->
<div class="sentence-block" data-plain="日本の桜、今年は早く咲くでしょう">
  <div class="japanese">
    <ruby>日本<rt>にほん</rt></ruby>の
    <ruby>桜<rt>さくら</rt></ruby>、
    <ruby>今年<rt>ことし</rt></ruby>は
    <ruby>早<rt>はや</rt></ruby>く
    <ruby>咲<rt>さ</rt></ruby>くでしょう
  </div>
  <span class="translation">Bunga Sakura di Jepang, tahun ini akan mekar lebih awal</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<!-- 2 -->
<div class="sentence-block" data-plain="今年の春、日本の桜はいつもより早く咲くという予想が出ました。">
  <div class="japanese">
    <ruby>今年<rt>ことし</rt></ruby>の
    <ruby>春<rt>はる</rt></ruby>、
    <ruby>日本<rt>にほん</rt></ruby>の
    <ruby>桜<rt>さくら</rt></ruby>はいつもより
    <ruby>早<rt>はや</rt></ruby>く
    <ruby>咲<rt>さ</rt></ruby>くという
    <ruby>予想<rt>よそう</rt></ruby>が
    <ruby>出<rt>で</rt></ruby>ました。
  </div>
  <span class="translation">Pada musim semi tahun ini, muncul prediksi bahwa sakura di Jepang akan mekar lebih awal dari biasanya.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<!-- 3 -->
<div class="sentence-block" data-plain="気象庁は二月二十六日に新しい情報を発表しました。">
  <div class="japanese">
    <ruby>気象庁<rt>きしょうちょう</rt></ruby>は
    <ruby>二月<rt>にがつ</rt></ruby>
    <ruby>二十六日<rt>にじゅうろくにち</rt></ruby>に
    <ruby>新<rt>あたら</rt></ruby>しい
    <ruby>情報<rt>じょうほう</rt></ruby>を
    <ruby>発表<rt>はっぴょう</rt></ruby>しました。
  </div>
  <span class="translation">Badan Meteorologi mengumumkan informasi terbaru pada tanggal 26 Februari.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<!-- 4 -->
<div class="sentence-block" data-plain="東京と福岡では三月二十日に咲き始めるでしょう。">
  <div class="japanese">
    <ruby>東京<rt>とうきょう</rt></ruby>と
    <ruby>福岡<rt>ふくおか</rt></ruby>では
    <ruby>三月<rt>さんがつ</rt></ruby>
    <ruby>二十日<rt>はつか</rt></ruby>に
    <ruby>咲<rt>さ</rt></ruby>き
    <ruby>始<rt>はじ</rt></ruby>めるでしょう。
  </div>
  <span class="translation">Di Tokyo dan Fukuoka, sakura akan mulai mekar pada tanggal 20 Maret.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<!-- 5 -->
<div class="sentence-block" data-plain="名古屋と高知は三月二十一日、大阪は三月二十四日に咲く予定です。">
  <div class="japanese">
    <ruby>名古屋<rt>なごや</rt></ruby>と
    <ruby>高知<rt>こうち</rt></ruby>は
    <ruby>三月<rt>さんがつ</rt></ruby>
    <ruby>二十一日<rt>にじゅういちにち</rt></ruby>、
    <ruby>大阪<rt>おおさか</rt></ruby>は
    <ruby>三月<rt>さんがつ</rt></ruby>
    <ruby>二十四日<rt>にじゅうよっか</rt></ruby>に
    <ruby>咲<rt>さ</rt></ruby>く
    <ruby>予定<rt>よてい</rt></ruby>です。
  </div>
  <span class="translation">Nagoya dan Kochi dijadwalkan mekar pada 21 Maret, dan Osaka pada 24 Maret.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<!-- 6 -->
<div class="sentence-block" data-plain="北の方にある仙台は四月一日、札幌は四月二十七日になるでしょう。">
  <div class="japanese">
    <ruby>北<rt>きた</rt></ruby>の
    <ruby>方<rt>ほう</rt></ruby>にある
    <ruby>仙台<rt>せんだい</rt></ruby>は
    <ruby>四月<rt>しがつ</rt></ruby>
    <ruby>一日<rt>ついたち</rt></ruby>、
    <ruby>札幌<rt>さっぽろ</rt></ruby>は
    <ruby>四月<rt>しがつ</rt></ruby>
    <ruby>二十七日<rt>にじゅうななにち</rt></ruby>になるでしょう。
  </div>
  <span class="translation">Sendai yang berada di arah utara akan mekar pada 1 April, dan Sapporo pada 27 April.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<!-- 7 -->
<div class="sentence-block" data-plain="今年の一月はとても寒かったですが、二月と三月は暖かい日が多いです。">
  <div class="japanese">
    <ruby>今年<rt>ことし</rt></ruby>の
    <ruby>一月<rt>いちがつ</rt></ruby>はとても
    <ruby>寒<rt>さむ</rt></ruby>かったですが、
    <ruby>二月<rt>にがつ</rt></ruby>と
    <ruby>三月<rt>さんがつ</rt></ruby>は
    <ruby>暖<rt>あたた</rt></ruby>かい
    <ruby>日<rt>ひ</rt></ruby>が
    <ruby>多<rt>おお</rt></ruby>いです。
  </div>
  <span class="translation">Bulan Januari tahun ini sangat dingin, tetapi bulan Februari dan Maret banyak hari yang hangat.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<!-- 8 -->
<div class="sentence-block" data-plain="だから、桜の花が早く開く準備をしています。">
  <div class="japanese">
    だから、
    <ruby>桜<rt>さくら</rt></ruby>の
    <ruby>花<rt>はな</rt></ruby>が
    <ruby>早<rt>はや</rt></ruby>く
    <ruby>開<rt>ひら</rt></ruby>く
    <ruby>準備<rt>じゅんび</rt></ruby>をしています。
  </div>
  <span class="translation">Oleh karena itu, bunga sakura sedang bersiap untuk mekar lebih cepat.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>
    `
  },

  {
    title: "トラブルがあったスカイツリー安全をチェックして営業を始めた <br> Skytree yang sempat mengalami masalah kembali beroperasi setelah pemeriksaan keamanan",
    content: `
      <div class="sentence-block" data-plain="トラブルがあったスカイツリー安全をチェックして営業を始めた">
<div class="sentence-block" data-plain="トラブルがあったスカイツリー安全をチェックして営業を始めた">
  <div class="japanese">
    トラブルがあったスカイツリー
    <ruby>安全<rt>あんぜん</rt></ruby>をチェックして
    <ruby>営業<rt>えいぎょう</rt></ruby>を
    <ruby>始<rt>はじ</rt></ruby>めた
  </div>
  <span class="translation">Skytree yang sempat mengalami masalah kembali beroperasi setelah pemeriksaan keamanan</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="エレベーターのトラブルがあった東京スカイツリーのニュースです。">
  <div class="japanese">
    エレベーターのトラブルがあった
    <ruby>東京<rt>とうきょう</rt></ruby>スカイツリーのニュースです。
  </div>
  <span class="translation">Ini adalah berita tentang Tokyo Skytree yang sempat mengalami masalah pada liftnya.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="東京スカイツリーで、今月22日、エレベーターの1つが止まりました。">
  <div class="japanese">
    <ruby>東京<rt>とうきょう</rt></ruby>スカイツリーで、
    <ruby>今月<rt>こんげつ</rt></ruby>22<ruby>日<rt>にち</rt></ruby>、
    エレベーターの<ruby>1<rt>ひと</rt></ruby>つが
    <ruby>止<rt>と</rt></ruby>まりました。
  </div>
  <span class="translation">Di Tokyo Skytree, pada tanggal 22 bulan ini, salah satu liftnya berhenti mendadak.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="エレベーターには20人が乗っていて、5時間以上、外に出ることができませんでした。">
  <div class="japanese">
    エレベーターには20<ruby>人<rt>にん</rt></ruby>が
    <ruby>乗<rt>の</rt></ruby>っていて、
    5<ruby>時間<rt>じかん</rt></ruby><ruby>以上<rt>いじょう</rt></ruby>、
    <ruby>外<rt>そと</rt></ruby>に
    <ruby>出<rt>で</rt></ruby>ることができませんでした。
  </div>
  <span class="translation">Ada 20 orang di dalam lift tersebut, dan selama lebih dari 5 jam, mereka tidak bisa keluar.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="東京スカイツリーの会社は、トラブルのあと、スカイツリーを休みにしてエレベーターの安全をチェックしました。">
  <div class="japanese">
    <ruby>東京<rt>とうきょう</rt></ruby>スカイツリーの
    <ruby>会社<rt>かいしゃ</rt></ruby>は、トラブルのあと、スカイツリーを
    <ruby>休<rt>やす</rt></ruby>みにしてエレベーターの
    <ruby>安全<rt>あんぜん</rt></ruby>をチェックしました。
  </div>
  <span class="translation">Perusahaan pengelola Tokyo Skytree meliburkan operasional setelah kejadian tersebut untuk memeriksa keamanan lift.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="トラブルがあったエレベーター以外は問題がないことがわかって、26日からまた営業を始めました。">
  <div class="japanese">
    トラブルがあったエレベーター
    <ruby>以外<rt>いがい</rt></ruby>は
    <ruby>問題<rt>もんだい</rt></ruby>がないことがわかって、26
    <ruby>日<rt>にち</rt></ruby>からまた
    <ruby>営業<rt>えいぎょう</rt></ruby>を
    <ruby>始<rt>はじ</rt></ruby>めました。
  </div>
  <span class="translation">Setelah dipastikan tidak ada masalah selain pada lift yang bermasalah tersebut, operasional dimulai kembali sejak tanggal 26.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="会社の人は「ご迷惑をかけて申し訳ありません」と話しています。">
  <div class="japanese">
    <ruby>会社<rt>かいしゃ</rt></ruby>の
    <ruby>人<rt>ひと</rt></ruby>は「ご
    <ruby>迷惑<rt>めいわく</rt></ruby>をかけて
    <ruby>申<rt>もう</rt></ruby>し
    <ruby>訳<rt>わけ</rt></ruby>ありません」と
    <ruby>話<rt>はな</rt></ruby>しています。
  </div>
  <span class="translation">Pihak perusahaan mengatakan, "Kami memohon maaf atas ketidaknyamanan yang ditimbulkan."</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>
    `
  },

  {
    title: "熊本城の庭で新しい桜が見つかりました。<br>Bunga sakura baru telah ditemukan di taman Kastel Kumamoto.",
    content: `
<div class="sentence-block" data-plain="熊本城の庭で新しい桜が見つかりました。">
  <div class="japanese">
    <ruby>熊本城<rt>くまもとじょう</rt></ruby>の
    <ruby>庭<rt>にわ</rt></ruby>で
    <ruby>新<rt>あたら</rt></ruby>しい
    <ruby>桜<rt>さくら</rt></ruby>が
    <ruby>見<rt>み</rt></ruby>つかりました。
  </div>
  <span class="translation">Bunga sakura baru telah ditemukan di taman Kastel Kumamoto.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="熊本市によると、この桜は、2022年度に熊本城で桜を調べているときに見つかりました。">
  <div class="japanese">
    <ruby>熊本市<rt>くまもとし</rt></ruby>によると、この
    <ruby>桜<rt>さくら</rt></ruby>は、2022
    <ruby>年度<rt>ねんど</rt></ruby>に
    <ruby>熊本城<rt>くまもとじょう</rt></ruby>で
    <ruby>桜<rt>さくら</rt></ruby>を
    <ruby>調<rt>しら</rt></ruby>べているときに
    <ruby>見<rt>み</rt></ruby>つかりました。
  </div>
  <span class="translation">Menurut Pemerintah Kota Kumamoto, sakura ini ditemukan saat sedang melakukan penelitian sakura di Kastel Kumamoto pada tahun fiskal 2022.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="花の色が白から紅に変わります。このため、紅と白の花が一緒に咲いているように見えます。">
  <div class="japanese">
    <ruby>花<rt>はな</rt></ruby>の
    <ruby>色<rt>いろ</rt></ruby>が
    <ruby>白<rt>しろ</rt></ruby>から
    <ruby>紅<rt>あか</rt></ruby>に
    <ruby>変<rt>か</rt></ruby>わります。このため、
    <ruby>紅<rt>あか</rt></ruby>と
    <ruby>白<rt>しろ</rt></ruby>の
    <ruby>花<rt>はな</rt></ruby>が
    <ruby>一緒<rt>いっしょ</rt></ruby>に
    <ruby>咲<rt>さ</rt></ruby>いているように
    <ruby>見<rt>み</rt></ruby>えます。
  </div>
  <span class="translation">Warna bunganya berubah dari putih menjadi merah tua. Karena itu, bunga merah dan putih terlihat seolah-olah mekar bersamaan.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="専門家は「新しい種類の特徴を持っています」と話しました。">
  <div class="japanese">
    <ruby>専門家<rt>せんもんか</rt></ruby>は「
    <ruby>新<rt>あたら</rt></ruby>しい
    <ruby>種類<rt>しゅるい</rt></ruby>の
    <ruby>特徴<rt>とくちょう</rt></ruby>を
    <ruby>持<rt>も</rt></ruby>っています」と
    <ruby>話<rt>はな</rt></ruby>しました。
  </div>
  <span class="translation">Ahli mengatakan, "(Sakura ini) memiliki ciri-ciri dari spesies baru."</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="熊本市は、市民に投票してもらって桜の名前を決めることにしています。">
  <div class="japanese">
    <ruby>熊本市<rt>くまもとし</rt></ruby>は、
    <ruby>市民<rt>しみん</rt></ruby>に
    <ruby>投票<rt>とうひょう</rt></ruby>してもらって
    <ruby>桜<rt>さくら</rt></ruby>の
    <ruby>名前<rt>なまえ</rt></ruby>を
    <ruby>決<rt>き</rt></ruby>めることにしています。
  </div>
  <span class="translation">Kota Kumamoto memutuskan untuk menentukan nama sakura tersebut melalui pemungutan suara oleh warga.</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>

<div class="sentence-block" data-plain="お年寄りの男性は「春が楽しみです」と話していました。">
  <div class="japanese">
    お<ruby>年寄<rt>としよ</rt></ruby>りの
    <ruby>男性<rt>だんせい</rt></ruby>は「
    <ruby>春<rt>はる</rt></ruby>が
    <ruby>楽<rt>たの</rt></ruby>しみです」と
    <ruby>話<rt>はな</rt></ruby>していました。
  </div>
  <span class="translation">Seorang pria lansia mengatakan, "Saya menantikan musim semi."</span>
  <input class="typing-input" type="text" autocomplete="off">
</div>
    `
  }
];

const menu = document.getElementById("menu");
const container = document.getElementById("news-container");
const playBtn = document.getElementById("playBtn")
const stopBtn = document.getElementById("stopBtn")

newsData.forEach((news, index) => {
  const button = document.createElement("button");
  button.innerHTML = news.title;
  button.classList = 'pilihan';
  button.onclick = () => startNews(index);
  menu.appendChild(button);
});

function startNews(index) {

  menu.style.display = "none";
  playBtn.style.display = "block"
  stopBtn.style.display = "block"

  container.innerHTML = newsData[index].content;

  initTyping();
}

function initTyping() {

  const blocks = document.querySelectorAll(".sentence-block");
  let currentIndex = 0;

  blocks.forEach(block => {
    block.querySelector(".typing-input").style.display = "none";
  });

  let firstInput = blocks[0].querySelector(".typing-input");
  firstInput.style.display = "block";
  firstInput.focus();

  blocks.forEach((block, index) => {

    const input = block.querySelector(".typing-input");
    const correctText = block.dataset.plain;

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {

        if (input.value === correctText) {

          input.style.display = "none";
          currentIndex++;

        if (currentIndex >= blocks.length) {

            alert("🎉 Selesai!");

            // Bersihkan konten berita
            container.innerHTML = "";

            // Tampilkan kembali menu
            menu.style.display = "block";

            // Hilngkan kembali tombol play/stop
            playBtn.style.display = "none"
            stopBtn.style.display = "none"

            return;
        }

          const nextInput = blocks[currentIndex]
            .querySelector(".typing-input");

          nextInput.style.display = "block";
          nextInput.focus();

        } else {
          alert("Masih ada kesalahan.");
        }
      }
    });

  });
}


let isReading = false;
let currentReadIndex = 0;

playBtn.addEventListener("click", () => {
  if (isReading) return;

  isReading = true;
  currentReadIndex = 0;

  readNextSentence();
});

stopBtn.addEventListener("click", () => {
  speechSynthesis.cancel();
  isReading = false;
  removeHighlight();
});

function readNextSentence() {

  const blocks = document.querySelectorAll(".sentence-block");

  if (currentReadIndex >= blocks.length) {
    isReading = false;
    removeHighlight();
    return;
  }

  const block = blocks[currentReadIndex];
  const text = block.dataset.plain;

  highlightBlock(block);

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP"; // penting untuk Jepang
  utterance.rate = 0.7;

  utterance.onend = () => {
    currentReadIndex++;
    readNextSentence();
  };

  speechSynthesis.speak(utterance);
}

function highlightBlock(activeBlock) {

  const blocks = document.querySelectorAll(".sentence-block");

  blocks.forEach(block => {
    block.classList.remove("active-reading");
  });

  activeBlock.classList.add("active-reading");
}

function removeHighlight() {
  const blocks = document.querySelectorAll(".sentence-block");
  blocks.forEach(block => {
    block.classList.remove("active-reading");
  });
}

function scrollToCenter(element) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}
