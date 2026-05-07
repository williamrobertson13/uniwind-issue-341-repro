import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy775 } from '../generated/copy/copy775';
import { layout775 } from '../generated/layouts/layout775';
import { palette775 } from '../generated/palettes/palette775';

const RuntimeView775 = withUniwind(View);

export function Screen775() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView775 styleClassName={layout775.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy775.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy775.detail} / {palette775.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
