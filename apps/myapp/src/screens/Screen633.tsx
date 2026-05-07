import { Pressable, Text, View } from 'react-native';

import { copy633 } from '../generated/copy/copy633';
import { layout633 } from '../generated/layouts/layout633';
import { palette633 } from '../generated/palettes/palette633';

export function Screen633() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout633.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy633.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy633.detail} / {palette633.name}
			</Text>
		</View>
	);
}
