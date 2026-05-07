import { Pressable, Text, View } from 'react-native';

import { copy825 } from '../generated/copy/copy825';
import { layout825 } from '../generated/layouts/layout825';
import { palette825 } from '../generated/palettes/palette825';

export function Screen825() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout825.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy825.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy825.detail} / {palette825.name}
			</Text>
		</View>
	);
}
