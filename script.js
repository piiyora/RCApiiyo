// =========================
// Loading Screen
// =========================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const loading =
            document.getElementById("loading");

        const loadingImage =
            document.getElementById("loadingImage");


        // Loadingが存在しない場合
        if (!loading) {
            return;
        }


        // =========================
        // スクロールロック
        // =========================

        document.body.classList.add(
            "loading-active"
        );


        // =========================
        // 最低表示時間
        // =========================

        const minimumTime = 2000;

        const startTime = Date.now();


        function finishLoading() {

            const elapsed =
                Date.now() - startTime;

            const remaining =
                Math.max(
                    0,
                    minimumTime - elapsed
                );


            setTimeout(
                function () {

                    // Loadingをフェードアウト
                    loading.classList.add("hide");


                    // フェードアウト終了後
                    setTimeout(
                        function () {

                            loading.style.display =
                                "none";


                            // =========================
                            // スクロールロック解除
                            // =========================

                            document.body.classList.remove(
                                "loading-active"
                            );


                        },
                        800
                    );

                },
                remaining
            );
        }


        // =========================
        // 画像読み込み確認
        // =========================

        if (loadingImage) {

            if (loadingImage.complete) {

                finishLoading();

            } else {

                loadingImage.addEventListener(
                    "load",
                    finishLoading,
                    { once: true }
                );

                loadingImage.addEventListener(
                    "error",
                    finishLoading,
                    { once: true }
                );

            }

        } else {

            // 画像がない場合もLoadingを終了
            finishLoading();

        }

    }
);


// =========================
// Image Viewer
// =========================

function openImage(imagePath) {

    const viewer =
        document.getElementById("imageViewer");

    const image =
        document.getElementById("viewerImage");


    image.src = imagePath;

    viewer.classList.add("show");

    document.body.style.overflow =
        "hidden";
}


// =========================
// Close Image
// =========================

function closeImage(event) {

    if (
        event &&
        event.target.id === "viewerImage"
    ) {

        return;

    }


    const viewer =
        document.getElementById("imageViewer");


    viewer.classList.remove("show");

    document.body.style.overflow =
        "";
}


// =========================
// ESC Key
// =========================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeImage();

        }

    }
);
// =========================
// Scroll Fade Animation
// =========================

const scrollObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "scroll-show"
                );

                scrollObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    }
);


// アニメーションする要素

document
    .querySelectorAll(
        ".profile-card, .profile-mini-card, .blog-card, .link-card, .card"
    )
    .forEach(function (element) {

        element.classList.add(
            "scroll-animation"
        );

        scrollObserver.observe(element);

    });
  // =========================
// Back To Top
// =========================

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    // スクロールしたら表示
    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY >= 800) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }
    );


    // クリックしたら一番上へ
    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}
// =========================
// Cat Message
// =========================

const catMessage =
    document.querySelector(".cat-message");

if (catMessage) {

    const messages = [
   "大型アップデートにゃ!！",
    "javascript勉強中🔥！",
    "たまにこのメッセージを変えるにゃ！",
    "楽しんでいってにゃ！🐱",

    "やっほー！🐱",
    "来てくれてありがとにゃ！",
    "最後まで読んだら何かいいことあるかもにゃ？",
    "このサイト、少しずつ成長中にゃ🌱",
    "新しい機能を追加したにゃ！✨",
    "どこかに隠し要素があるかもにゃ…？👀",
    "BLOGも見ていってにゃ！📖",
    "PROFILEも見てみてにゃ！",
    "HTMLとCSS頑張ってるにゃ！💻",
    "JavaScriptって難しいにゃ…！😵‍💫",
    "エラー0件って気持ちいいにゃ！✨",
    "ここまで見てくれてありがとうにゃ！",
    "loadingの女の子、実は...",
    "星が多いセリフはレアゼリフにゃ!!スクリーンショットを忘れずににゃ",
    "にゃ〜！🐾"
];
    

    let messageIndex = 0;

    setInterval(function () {

        catMessage.style.opacity = "0";

        setTimeout(function () {

            messageIndex++;

            if (messageIndex >= messages.length) {
                messageIndex = 0;
            }

            catMessage.innerHTML =
                messages[messageIndex];

            catMessage.style.opacity = "1";

        }, 400);

    }, 5000);

}
// =========================
// Loading Random Message
// =========================

const loadingMessages = [
    "こんにちは〜！☁️",
    "もうすぐページが開きますよ〜！",
    "ちょっとだけ待ってね！",
    "ゆっくり読み込んでいます✨",
    "来てくれてありがとう！",
    "Loading中です〜❄️",
    "もう少しだけ待ってね！",
    "ぴよぉのサイトへようこそ〜！🐱",
    "やっほー！",
    "何が出るかはお楽しみ！👀"
];


// ⭐ レアメッセージ
const rareLoadingMessages = [
    "⭐ あっ、レアメッセージだ！👀",
    "⭐ 今日はラッキーかもね！🍀",
    "⭐ 隠しメッセージ発見！✨",
    "⭐ ぴよぉから特別なお知らせです！🐱",
    "⭐ こんなの見つけたの！？😳",
    "⭐ よく見つけましたね！✨",
    "⭐ 特別なLoading中です❄️",
    "⭐ 今日はいいことあるかも！🌟",
    "⭐ ぴよぉがこっそり見てます👀",
    "⭐⭐ 私のこと、そんなに見てるの？ ⭐⭐",
    "⭐ レアセリフを引きました！🎉"
];


// Loading要素
const loadingElement =
    document.getElementById("loading");


if (loadingElement) {

    // ⭐ 10%の確率でレア
    const isRare =
        Math.random() < 0.1;

    let selectedMessage;


    if (
        isRare &&
        rareLoadingMessages.length > 0
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                rareLoadingMessages.length
            );

        selectedMessage =
            rareLoadingMessages[randomIndex];

    } else {

        const randomIndex =
            Math.floor(
                Math.random() *
                loadingMessages.length
            );

        selectedMessage =
            loadingMessages[randomIndex];

    }


    // 吹き出しの文字を変更
    loadingElement.style.setProperty(
        "--loading-message",
        `"${selectedMessage}"`
    );

}
// =========================
// Cat Tap System
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const cat = document.getElementById("cat");
    const sound = document.getElementById("catSound");

    if (!cat) {
        console.error("cat が見つかりません");
        return;
    }

    if (!sound) {
        console.error("catSound が見つかりません");
        return;
    }

    let tapCount = 0;

    cat.addEventListener("click", function () {

        tapCount++;

        console.log("猫ちゃんタップ:", tapCount);

        // -------------------------
        // 音
        // -------------------------

        sound.currentTime = 0;

        sound.play().catch(function (error) {
            console.error("音声エラー:", error);
        });


        // -------------------------
        // 10回目
        // -------------------------

        if (tapCount === 10) {

            console.log("🎉 10回目の特別演出！");


            // 猫ちゃんポンッ！
            cat.classList.remove("cat-big");

            void cat.offsetWidth;

            cat.classList.add("cat-big");


            // -------------------------
            // こんにちは！を動かす
            // -------------------------

            const title =
                document.querySelector(".hero-text h1");

            if (title) {

                title.classList.remove("text-burst");

                void title.offsetWidth;

                title.classList.add("text-burst");

            }
// -------------------------
// SECRET FOUND!
// -------------------------

const secret = document.createElement("div");

secret.className = "secret-found";

secret.innerHTML = `
    <span>✨ SECRET FOUND! ✨</span>
    <small>10回タップ達成！🐱</small>
`;

document.body.appendChild(secret);

setTimeout(function () {
    secret.remove();
}, 2500);

            // -------------------------
            // クラッカー
            // -------------------------

            for (let i = 0; i < 30; i++) {

                const cracker =
                    document.createElement("div");

                cracker.textContent = "🎉";

                cracker.style.position = "fixed";

                cracker.style.left =
                    Math.random() * 100 + "vw";

                cracker.style.top =
                    Math.random() * 70 + "vh";

                cracker.style.fontSize = "28px";

                cracker.style.zIndex = "999999";

                cracker.style.pointerEvents = "none";

                cracker.style.animation =
                    "crackerFall 1.5s ease-out forwards";

                document.body.appendChild(cracker);


                setTimeout(function () {

                    cracker.remove();

                }, 1500);

            }


            // -------------------------
            // カウントリセット
            // -------------------------

            tapCount = 0;

        }

    });

});