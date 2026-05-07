import { Pressable, Text, View } from 'react-native';

import { copy921 } from '../generated/copy/copy921';
import { layout921 } from '../generated/layouts/layout921';
import { palette921 } from '../generated/palettes/palette921';

export function Screen921() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout921.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy921.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy921.detail} / {palette921.name}
			</Text>
		</View>
	);
}
