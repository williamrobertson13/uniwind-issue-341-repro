import { Pressable, Text, View } from 'react-native';

import { copy146 } from '../generated/copy/copy146';
import { layout146 } from '../generated/layouts/layout146';
import { palette146 } from '../generated/palettes/palette146';

export function Screen146() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout146.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy146.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy146.detail} / {palette146.name}
			</Text>
		</View>
	);
}
