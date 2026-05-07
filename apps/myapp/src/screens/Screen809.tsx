import { Pressable, Text, View } from 'react-native';

import { copy809 } from '../generated/copy/copy809';
import { layout809 } from '../generated/layouts/layout809';
import { palette809 } from '../generated/palettes/palette809';

export function Screen809() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout809.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy809.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy809.detail} / {palette809.name}
			</Text>
		</View>
	);
}
