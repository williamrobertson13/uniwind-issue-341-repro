import { Pressable, Text, View } from 'react-native';

import { copy191 } from '../generated/copy/copy191';
import { layout191 } from '../generated/layouts/layout191';
import { palette191 } from '../generated/palettes/palette191';

export function Screen191() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout191.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy191.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy191.detail} / {palette191.name}
			</Text>
		</View>
	);
}
