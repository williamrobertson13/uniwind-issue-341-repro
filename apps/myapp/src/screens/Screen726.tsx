import { Pressable, Text, View } from 'react-native';

import { copy726 } from '../generated/copy/copy726';
import { layout726 } from '../generated/layouts/layout726';
import { palette726 } from '../generated/palettes/palette726';

export function Screen726() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout726.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy726.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy726.detail} / {palette726.name}
			</Text>
		</View>
	);
}
