import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy721 } from '../generated/copy/copy721';
import { layout721 } from '../generated/layouts/layout721';
import { palette721 } from '../generated/palettes/palette721';

const RuntimeView721 = withUniwind(View);

export function Screen721() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView721 styleClassName={layout721.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy721.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy721.detail} / {palette721.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
