import { Pressable, Text, View } from 'react-native';

import { copy753 } from '../generated/copy/copy753';
import { layout753 } from '../generated/layouts/layout753';
import { palette753 } from '../generated/palettes/palette753';

export function Screen753() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout753.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy753.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy753.detail} / {palette753.name}
			</Text>
		</View>
	);
}
