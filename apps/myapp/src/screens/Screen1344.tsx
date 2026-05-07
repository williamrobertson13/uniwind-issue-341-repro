import { Pressable, Text, View } from 'react-native';

import { copy1344 } from '../generated/copy/copy1344';
import { layout1344 } from '../generated/layouts/layout1344';
import { palette1344 } from '../generated/palettes/palette1344';

export function Screen1344() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1344.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1344.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1344.detail} / {palette1344.name}
			</Text>
		</View>
	);
}
