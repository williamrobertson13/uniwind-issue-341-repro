import { Pressable, Text, View } from 'react-native';

import { copy747 } from '../generated/copy/copy747';
import { layout747 } from '../generated/layouts/layout747';
import { palette747 } from '../generated/palettes/palette747';

export function Screen747() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout747.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy747.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy747.detail} / {palette747.name}
			</Text>
		</View>
	);
}
