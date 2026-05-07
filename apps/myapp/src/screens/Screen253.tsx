import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy253 } from '../generated/copy/copy253';
import { layout253 } from '../generated/layouts/layout253';
import { palette253 } from '../generated/palettes/palette253';

const RuntimeView253 = withUniwind(View);

export function Screen253() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView253 styleClassName={layout253.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy253.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy253.detail} / {palette253.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
