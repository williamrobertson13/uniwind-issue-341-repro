import { Pressable, Text, View } from 'react-native';

import { copy105 } from '../generated/copy/copy105';
import { layout105 } from '../generated/layouts/layout105';
import { palette105 } from '../generated/palettes/palette105';

export function Screen105() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout105.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy105.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy105.detail} / {palette105.name}
			</Text>
		</View>
	);
}
