import { Pressable, Text, View } from 'react-native';

import { copy488 } from '../generated/copy/copy488';
import { layout488 } from '../generated/layouts/layout488';
import { palette488 } from '../generated/palettes/palette488';

export function Screen488() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout488.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy488.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy488.detail} / {palette488.name}
			</Text>
		</View>
	);
}
