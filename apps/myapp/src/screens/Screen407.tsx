import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy407 } from '../generated/copy/copy407';
import { layout407 } from '../generated/layouts/layout407';
import { palette407 } from '../generated/palettes/palette407';

const RuntimeView407 = withUniwind(View);

export function Screen407() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView407 styleClassName={layout407.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy407.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy407.detail} / {palette407.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
