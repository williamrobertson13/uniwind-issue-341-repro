import { Pressable, Text, View } from 'react-native';

import { copy1304 } from '../generated/copy/copy1304';
import { layout1304 } from '../generated/layouts/layout1304';
import { palette1304 } from '../generated/palettes/palette1304';

export function Screen1304() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1304.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1304.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1304.detail} / {palette1304.name}
			</Text>
		</View>
	);
}
