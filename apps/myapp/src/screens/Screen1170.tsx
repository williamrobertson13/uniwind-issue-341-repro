import { Pressable, Text, View } from 'react-native';

import { copy1170 } from '../generated/copy/copy1170';
import { layout1170 } from '../generated/layouts/layout1170';
import { palette1170 } from '../generated/palettes/palette1170';

export function Screen1170() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1170.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1170.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1170.detail} / {palette1170.name}
			</Text>
		</View>
	);
}
