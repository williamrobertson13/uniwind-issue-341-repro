import { Pressable, Text, View } from 'react-native';

import { copy1266 } from '../generated/copy/copy1266';
import { layout1266 } from '../generated/layouts/layout1266';
import { palette1266 } from '../generated/palettes/palette1266';

export function Screen1266() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1266.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1266.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1266.detail} / {palette1266.name}
			</Text>
		</View>
	);
}
