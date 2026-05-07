import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy127 } from '../generated/copy/copy127';
import { layout127 } from '../generated/layouts/layout127';
import { palette127 } from '../generated/palettes/palette127';

const RuntimeView127 = withUniwind(View);

export function Screen127() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView127 styleClassName={layout127.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy127.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy127.detail} / {palette127.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
