import { Pressable, Text, View } from 'react-native';

import { copy369 } from '../generated/copy/copy369';
import { layout369 } from '../generated/layouts/layout369';
import { palette369 } from '../generated/palettes/palette369';

export function Screen369() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout369.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy369.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy369.detail} / {palette369.name}
			</Text>
		</View>
	);
}
