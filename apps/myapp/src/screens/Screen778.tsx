import { Pressable, Text, View } from 'react-native';

import { copy778 } from '../generated/copy/copy778';
import { layout778 } from '../generated/layouts/layout778';
import { palette778 } from '../generated/palettes/palette778';

export function Screen778() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout778.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy778.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy778.detail} / {palette778.name}
			</Text>
		</View>
	);
}
