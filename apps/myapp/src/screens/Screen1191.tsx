import { Pressable, Text, View } from 'react-native';

import { copy1191 } from '../generated/copy/copy1191';
import { layout1191 } from '../generated/layouts/layout1191';
import { palette1191 } from '../generated/palettes/palette1191';

export function Screen1191() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1191.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1191.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1191.detail} / {palette1191.name}
			</Text>
		</View>
	);
}
