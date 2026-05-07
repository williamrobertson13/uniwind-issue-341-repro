import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy208 } from '../generated/copy/copy208';
import { layout208 } from '../generated/layouts/layout208';
import { palette208 } from '../generated/palettes/palette208';

const RuntimeView208 = withUniwind(View);

export function Screen208() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView208 styleClassName={layout208.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy208.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy208.detail} / {palette208.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
