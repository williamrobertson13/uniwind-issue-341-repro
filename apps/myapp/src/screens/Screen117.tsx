import { Pressable, Text, View } from 'react-native';

import { copy117 } from '../generated/copy/copy117';
import { layout117 } from '../generated/layouts/layout117';
import { palette117 } from '../generated/palettes/palette117';

export function Screen117() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout117.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy117.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy117.detail} / {palette117.name}
			</Text>
		</View>
	);
}
