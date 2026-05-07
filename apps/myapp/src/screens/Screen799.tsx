import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy799 } from '../generated/copy/copy799';
import { layout799 } from '../generated/layouts/layout799';
import { palette799 } from '../generated/palettes/palette799';

const RuntimeView799 = withUniwind(View);

export function Screen799() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView799 styleClassName={layout799.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy799.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy799.detail} / {palette799.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
