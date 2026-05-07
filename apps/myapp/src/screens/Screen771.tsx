import { Pressable, Text, View } from 'react-native';

import { copy771 } from '../generated/copy/copy771';
import { layout771 } from '../generated/layouts/layout771';
import { palette771 } from '../generated/palettes/palette771';

export function Screen771() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout771.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy771.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy771.detail} / {palette771.name}
			</Text>
		</View>
	);
}
