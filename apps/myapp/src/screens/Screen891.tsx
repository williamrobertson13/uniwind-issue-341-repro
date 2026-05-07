import { Pressable, Text, View } from 'react-native';

import { copy891 } from '../generated/copy/copy891';
import { layout891 } from '../generated/layouts/layout891';
import { palette891 } from '../generated/palettes/palette891';

export function Screen891() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout891.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy891.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy891.detail} / {palette891.name}
			</Text>
		</View>
	);
}
