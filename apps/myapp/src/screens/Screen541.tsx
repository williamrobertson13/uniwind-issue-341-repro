import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy541 } from '../generated/copy/copy541';
import { layout541 } from '../generated/layouts/layout541';
import { palette541 } from '../generated/palettes/palette541';

const RuntimeView541 = withUniwind(View);

export function Screen541() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView541 styleClassName={layout541.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy541.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy541.detail} / {palette541.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
