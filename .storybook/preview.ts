import type { Preview } from "@storybook/nextjs-vite";
import { NextIntlClientProvider } from "next-intl";

// Import locales
import enMessages from "../src/shared/locales/en.json";
import ukMessages from "../src/shared/locales/uk.json";

const messages = {
    en: enMessages,
    uk: ukMessages
};

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo"
        },

        nextjs: {
            appDirectory: true
        }
    },

    decorators: [
        (Story, context) => {
            const locale = context.globals.locale || "uk";

            return NextIntlClientProvider({
                locale,
                messages: messages[locale as keyof typeof messages],
                children: Story()
            });
        }
    ],

    globalTypes: {
        locale: {
            description: "Internationalization locale",
            defaultValue: "uk",
            toolbar: {
                icon: "globe",
                items: [
                    { value: "en", title: "English" },
                    { value: "uk", title: "Українська" }
                ],
                showName: true
            }
        }
    }
};

export default preview;
