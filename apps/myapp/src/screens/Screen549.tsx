import { Pressable, Text, View } from 'react-native';

import { copy549 } from '../generated/copy/copy549';
import { layout549 } from '../generated/layouts/layout549';
import { palette549 } from '../generated/palettes/palette549';

export function Screen549() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout549.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy549.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy549.detail} / {palette549.name}
			</Text>
		</View>
	);
}
