import { Pressable, Text, View } from 'react-native';

import { copy1080 } from '../generated/copy/copy1080';
import { layout1080 } from '../generated/layouts/layout1080';
import { palette1080 } from '../generated/palettes/palette1080';

export function Screen1080() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1080.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1080.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1080.detail} / {palette1080.name}
			</Text>
		</View>
	);
}
