export const projectsData = [
    {
        id: 1,
        name: 'AI搭載金融アプリ',
        description: "AI搭載の金融モバイルアプリケーションを開発しました。Express、Typescript、OpenAI、AWS、MongoDBを使用してAPIを開発。AWS SES、Google、Facebookを利用したOTP認証システムを実装。OpenAIの最新モデルを使用したAIアシスタントを構築し、自社データセットでトレーニング。音声メッセージはAWS Transcribeでテキスト変換。Googleスプレッドシートからデータを取得し、PDFのタームシートを生成してAWS SESで送信。",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'バックエンド開発者',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: '旅行会社アプリ',
        description: 'アルメニアの旅行会社2ExpeditionのためのフルスタックWebアプリを設計・開発。NextJS、Typescript、MUI、TailwindCSS、Google Maps、Sun-Editor、React Slickを使用してUIを作成。多言語対応と多通貨対応を実装。NestJS、Typescript、MySQL、TypeORM、AWS、Nodemailerを使用してAPIを開発。フロントエンドはAWS Amplify、バックエンドはAWS EC2にデプロイ。',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'フルスタック開発者',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'AI搭載不動産アプリ',
        description: 'Replicate APIとOpenAIを使用したAIベースの不動産アプリを構築。API開発にはExpress、Typescript、OpenAI、Replicate、Stripe、Mongooseを採用。UIにはNextJS、Formik、TailwindCSSなどのnpmライブラリを活用。最新GPTモデルを使用して複数のAIアシスタントをトレーニングし、画像処理にReplicate APIを統合。ロールベース認証、サブスクリプション計画、Cronジョブスケジューリング、Stripeによる決済機能を実装。',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'フルスタック開発者',
        demo: '',
    },
    {
        id: 4,
        name: 'ニュースルーム管理システム',
        description: "Newsroom Managementという新聞管理ダッシュボードアプリケーションを開発。フロントエンド開発者として、NextJS、Material UI、Redux、Calendar、その他の必要なnpmライブラリを使用してダッシュボードを作成。アプリケーションの状態管理にReact Reduxを、フォーム処理にReact-hook-formとSun Editorを採用。",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        role: 'フルスタック開発者',
    }
];


// プロパティを削除しないでください
// 代わりに以下のように空白のままにしてください

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },