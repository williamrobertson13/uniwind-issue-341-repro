import { Pressable, Text, View } from 'react-native';

import { copy1152 } from '../generated/copy/copy1152';
import { layout1152 } from '../generated/layouts/layout1152';
import { palette1152 } from '../generated/palettes/palette1152';

export function Screen1152() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1152.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1152.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1152.detail} / {palette1152.name}
			</Text>
		</View>
	);
}
