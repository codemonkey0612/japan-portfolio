export const projectsData = [
    {
        id: 1,
        name: 'AI搭載金融アプリ',
        description: "AI搭載の金融モバイルアプリケーションを開発しました。Express、Typescript、OpenAI、AWS、MongoDBを使用してAPIを開発。AWS SES、Google、Facebookを利用したOTP認証システムを実装。OpenAIの最新モデルを使用したAIアシスタントを構築し、自社データセットでトレーニング。音声メッセージはAWS Transcribeでテキスト変換。Googleスプレッドシートからデータを取得し、PDFのタームシートを生成してAWS SESで送信。",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'バックエンド開発者',
        code: '',
        demo: 'https://www.workiva.com/ja-jp/',
    },
    {
        id: 2,
        name: '旅行会社アプリ',
        description: 'アルメニアの旅行会社2ExpeditionのためのフルスタックWebアプリを設計・開発。NextJS、Typescript、MUI、TailwindCSS、Google Maps、Sun-Editor、React Slickを使用してUIを作成。多言語対応と多通貨対応を実装。NestJS、Typescript、MySQL、TypeORM、AWS、Nodemailerを使用してAPIを開発。フロントエンドはAWS Amplify、バックエンドはAWS EC2にデプロイ。',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'フルスタック開発者',
        code: '',
        demo: 'https://www.ikyu.com/',
    },
    {
        id: 3,
        name: 'AI搭載不動産アプリ',
        description: 'Replicate APIとOpenAIを使用したAIベースの不動産アプリを構築。API開発にはExpress、Typescript、OpenAI、Replicate、Stripe、Mongooseを採用。UIにはNextJS、Formik、TailwindCSSなどのnpmライブラリを活用。最新GPTモデルを使用して複数のAIアシスタントをトレーニングし、画像処理にReplicate APIを統合。ロールベース認証、サブスクリプション計画、Cronジョブスケジューリング、Stripeによる決済機能を実装。',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'フルスタック開発者',
        demo: 'https://www.knock-knock-ai.com/',
    },
    {
        id: 4,
        name: 'クラウド会計ソフト',
        description: "freeeはすべてのスモールビジネスを支える統合型経営プラットフォームです。従来バラバラに存在していた業務やデータをフロントオフィスからバックオフィスまで一気通貫させ、誰もが自由に経営を行えること目指します。",
        tools: ['Wordpress', 'PHP', 'MySQL', 'Sun Editor', "Calendar"],
        code: '',
        demo: 'https://www.freee.co.jp/',
        role: 'フルスタック開発者',
    },
];


// プロパティを削除しないでください
// 代わりに以下のように空白のままにしてください

// code: GitHubリポジトリのURL（例: 'https://github.com/username/project-name'）
// demo: ライブデモサイトのURL（例: 'https://your-project-demo.vercel.app'）
// 空の場合は、対応するボタンが表示されません

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '', // GitHubリンクを追加
//     demo: '', // ライブデモリンクを追加
// },