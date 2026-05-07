import { Pressable, Text, View } from 'react-native';

import { copy849 } from '../generated/copy/copy849';
import { layout849 } from '../generated/layouts/layout849';
import { palette849 } from '../generated/palettes/palette849';

export function Screen849() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout849.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy849.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy849.detail} / {palette849.name}
			</Text>
		</View>
	);
}
