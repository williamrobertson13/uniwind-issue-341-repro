import { Pressable, Text, View } from 'react-native';

import { copy1104 } from '../generated/copy/copy1104';
import { layout1104 } from '../generated/layouts/layout1104';
import { palette1104 } from '../generated/palettes/palette1104';

export function Screen1104() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1104.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1104.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1104.detail} / {palette1104.name}
			</Text>
		</View>
	);
}
