import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy271 } from '../generated/copy/copy271';
import { layout271 } from '../generated/layouts/layout271';
import { palette271 } from '../generated/palettes/palette271';

const RuntimeView271 = withUniwind(View);

export function Screen271() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView271 styleClassName={layout271.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy271.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy271.detail} / {palette271.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
