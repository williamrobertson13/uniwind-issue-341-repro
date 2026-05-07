import { Pressable, Text, View } from 'react-native';

import { copy719 } from '../generated/copy/copy719';
import { layout719 } from '../generated/layouts/layout719';
import { palette719 } from '../generated/palettes/palette719';

export function Screen719() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout719.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy719.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy719.detail} / {palette719.name}
			</Text>
		</View>
	);
}
