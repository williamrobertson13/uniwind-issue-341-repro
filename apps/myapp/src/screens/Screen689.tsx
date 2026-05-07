import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy689 } from '../generated/copy/copy689';
import { layout689 } from '../generated/layouts/layout689';
import { palette689 } from '../generated/palettes/palette689';

const RuntimeView689 = withUniwind(View);

export function Screen689() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView689 styleClassName={layout689.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy689.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy689.detail} / {palette689.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
